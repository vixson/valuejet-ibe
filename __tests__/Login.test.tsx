import { render, screen, fireEvent } from "@testing-library/react";
import Login from "@/app/(AuthLayout)/login/page";
import Providers from "@/Providers";

import "@testing-library/jest-dom";
import CustomInput from "@/components/custom-ui/input";
import LoginForm from "@/app/(AuthLayout)/login/LoginForm";

describe("Login", () => {
  let container: HTMLElement;
  beforeAll(() => {
    const { container: renderedContainer } = render(
      <Providers>
        <LoginForm />
      </Providers>
    );
    container = renderedContainer;
  });
  it("Login form is rendered", () => {
    const myElem = screen.getByRole("form", { name: "login-form" });
    expect(myElem).toBeInTheDocument();
  });

  it("Email address input should be rendered", () => {
    render(<CustomInput label="Email Address" placeholder="E-Mail Address" />);
    const emailInputEl = screen.getByPlaceholderText(/E-Mail Address/i);

    expect(emailInputEl).toBeInTheDocument();
  });
});
