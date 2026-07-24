# Testing Guide

This document describes how to set up and run tests for the Minara Labs website.

## Current Status

Testing is currently **optional** and configured but not required for the MVP. You can add testing dependencies when you're ready to implement comprehensive tests.

## Adding Testing

### Step 1: Install Testing Dependencies

```bash
npm install --save-dev \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  jest \
  jest-environment-jsdom \
  @types/jest
```

### Step 2: Update package.json

Add test script to package.json:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

### Step 3: Run Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Test Structure

Tests are organized in the `__tests__` directory mirroring the project structure:

```
__tests__/
├── components/
│   ├── EmailForm.test.tsx
│   └── Hero.test.tsx
├── lib/
│   ├── utils.test.ts
│   └── hooks/
│       └── useEmailForm.test.ts
└── __mocks__/
    └── [mocked modules]
```

## Writing Tests

### Component Tests

```tsx
import { render, screen } from "@testing-library/react";
import Component from "@/components/Component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component />);
    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
```

### Hook Tests

```ts
import { renderHook, act } from "@testing-library/react";
import { useEmailForm } from "@/lib/hooks";

describe("useEmailForm", () => {
  it("initializes with empty values", () => {
    const { result } = renderHook(() => useEmailForm());
    expect(result.current[0].email).toBe("");
  });
});
```

### Utility Tests

```ts
import { validateEmail } from "@/lib/utils";

describe("validateEmail", () => {
  it("validates email format", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("invalid")).toBe(false);
  });
});
```

## Coverage Goals

Aim for:
- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

View coverage report:

```bash
npm run test:coverage
```

## Testing Best Practices

1. **Test behavior, not implementation**
   - Test what the component does, not how it does it
   - Write tests from the user's perspective

2. **Use semantic queries**
   ```tsx
   // Good
   screen.getByRole("button", { name: /submit/i });
   screen.getByPlaceholderText("Enter email");

   // Avoid
   screen.getByTestId("submit-button");
   ```

3. **Keep tests isolated**
   - Each test should be independent
   - Clean up after each test
   - Mock external dependencies

4. **Use meaningful assertions**
   ```tsx
   // Good
   expect(element).toBeInTheDocument();
   expect(element).toHaveClass("active");

   // Avoid
   expect(element).toBeTruthy();
   ```

## Common Test Patterns

### Testing Form Submission

```tsx
it("submits form with valid email", async () => {
  render(<EmailForm />);

  const input = screen.getByPlaceholderText("Enter your email");
  const button = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(input, { target: { value: "test@example.com" } });
  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});
```

### Testing Async Operations

```tsx
it("shows loading state during submission", async () => {
  render(<Component />);

  fireEvent.click(screen.getByRole("button"));

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Success")).toBeInTheDocument();
  });
});
```

### Testing Callbacks

```tsx
it("calls onSuccess callback", async () => {
  const onSuccess = jest.fn();
  render(<Component onSuccess={onSuccess} />);

  fireEvent.click(screen.getByRole("button"));

  await waitFor(() => {
    expect(onSuccess).toHaveBeenCalled();
  });
});
```

## Mocking

### Mocking Modules

```ts
jest.mock("@/lib/api", () => ({
  fetchData: jest.fn().mockResolvedValue({ data: "mocked" }),
}));
```

### Mocking Framer Motion

```ts
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => children,
    button: ({ children }: any) => children,
  },
  AnimatePresence: ({ children }: any) => children,
}));
```

## CI/CD Integration

Tests can be run automatically in GitHub Actions:

```yaml
- name: Run tests
  run: npm test -- --coverage

- name: Upload coverage
  uses: codecov/codecov-action@v3
```

## Resources

- [Testing Library Docs](https://testing-library.com/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
