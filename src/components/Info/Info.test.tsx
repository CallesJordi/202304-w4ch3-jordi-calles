import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given a Info component", () => {
  describe("When it was rendered", () => {
    test("Then it should show the Info component with a 'Calling...' text", () => {
      const expectedText = "Calling...";

      render(<Info />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
