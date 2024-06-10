import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CardRecipientButtons from "../../components/CardRecipientButtons";
import "@testing-library/jest-dom";
import ChatHistory from "../../components/ChatHistory";
import MessageInput from "../../components/MessageInput";
import { FetchOptions, fetchDataFromServer } from '../../services/api';

// Unit Tests

//Mocking fetch call for "test spinner loads when icon button is clicked"
jest.mock("../../services/api");

//Mock data fetch function
const mockFetchDataFromServer = jest.fn(
  (options: FetchOptions) =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          choices: { 0: { message: {role: 'assistant', content: 'test'}}} // Mocked data
      })
    } as Response)
);

(fetchDataFromServer as jest.Mock).mockImplementation(mockFetchDataFromServer);




describe("Testing rendering and behaviour of individual components", () => {
  /**
   * @jest-environment jsdom
   */
  test("colour of card recipient button changes when user hovers over it", () => {
    render(
      <CardRecipientButtons
        cardRecipients={["Dad", "Mum", "Sister"]}
        onSelectItem={function (item: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    fireEvent.mouseOver(screen.getByText("Dad"));
    expect(screen.getByText("Dad")).toHaveStyle("background: #d776f5");
  });

  /**
   * @jest-environment jsdom
   */
  test("test card recipient button correctly renders recipients", () => {
    const recipients = ["Mum", "Dad", "Cousin"];

    render(
      <CardRecipientButtons
        cardRecipients={recipients}
        onSelectItem={(item) => ""}
      />
    );

    expect(screen.getByText("Mum")).toBeInTheDocument();
    expect(screen.getByText("Dad")).toBeInTheDocument();
    expect(screen.getByText("Cousin")).toBeInTheDocument();
  });



  /**
   * @jest-environment jsdom
   */
  test("ChatGPT response renders correctly in the chat history component", async () => {
    // mock data simulating response from backend

    const updatedChats = {
      title: "Write me a birthday message for my mum",
      role: "assistant",
      content: "Happy Birthday Mum, hope you have a great day.",
    };

    const { getByText } = render(<ChatHistory updatedChats={[updatedChats]} />);

    expect(
      getByText("Write me a birthday message for my mum")
    ).toBeInTheDocument();
    expect(
      getByText("Happy Birthday Mum, hope you have a great day.")
    ).toBeInTheDocument();
  });


  /**
   * @jest-environment jsdom
   */
  test("test spinner loads when icon button is clicked", async () => {

    const textInput = "Write me a birthday message for my mum";

    const { getByLabelText } = render(
      <MessageInput
        textInput={textInput}
        userRequestSent={function (value: string): void {}}
        onDataReceived={function (data: {
          role: string;
          content: string;
        }): void {}}
      />
    );

    const iconButton = getByLabelText("Submit message");

    // fire click event
    fireEvent.click(screen.getByRole("button", { name: /Submit message/i }));

    // wait for loading spinner to appear
    await waitFor(() => {
      expect(mockFetchDataFromServer).toHaveBeenCalledTimes(1);
      expect(iconButton).toHaveTextContent("Loading...");
    });
  });
});
