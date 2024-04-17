import { fireEvent, render, screen } from "@testing-library/react";
import CardRecipientButtons from "../components/CardRecipientButtons";
import "@testing-library/jest-dom";
import ChatHistory from "../components/ChatHistory";

// Unit Tests


describe("Testing rendering and behaviour of individual components" , () => { 

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
  test("ChatGPT response renders correctly in the chat history component", () => {

    // mock data simulating response from backend
    const updatedChats = 
    {
      title: "Write me a birthday message for my mum",
      role: "assistant",
      content: "Happy Birthday Mum, hope you have a great day.",
    };
    
    const { getByText } = render(<ChatHistory updatedChats={[updatedChats]} />);

    expect(getByText("Write me a birthday message for my mum")).toBeInTheDocument();
    expect(getByText("Happy Birthday Mum, hope you have a great day.")).toBeInTheDocument();
  });

})