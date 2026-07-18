/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EmailForm from "@/components/EmailForm";

describe("EmailForm Component", () => {
  it("renders the email form", () => {
    render(<EmailForm />);

    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /notify me/i })).toBeInTheDocument();
  });

  it("shows error for empty email", async () => {
    render(<EmailForm />);

    const button = screen.getByRole("button", { name: /notify me/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("Please enter your email address")
      ).toBeInTheDocument();
    });
  });

  it("shows error for invalid email", async () => {
    render(<EmailForm />);

    const input = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: /notify me/i });

    fireEvent.change(input, { target: { value: "invalid-email" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address")
      ).toBeInTheDocument();
    });
  });

  it("accepts valid email", async () => {
    render(<EmailForm />);

    const input = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: /notify me/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("Thank you for subscribing.")
      ).toBeInTheDocument();
    });
  });

  it("calls onSuccess callback when email is submitted", async () => {
    const onSuccess = jest.fn();
    render(<EmailForm onSuccess={onSuccess} />);

    const input = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: /notify me/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
