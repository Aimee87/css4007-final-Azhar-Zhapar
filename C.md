# C Level — Tool-Using AI Agent

[Shared calendar, diagnostic, grading, reports, and submission rules](README.md) apply to every level.

## Objective

Build an agent that uses an LLM to select and execute tools.

## Mandatory Requirements

1. Satisfy D-level foundational requirements.
2. Implement at least two meaningful tools.
3. Register tools with the LLM.
4. Allow the LLM to decide which tool to call.
5. Execute real tool calls.
6. Return tool results to the LLM.
7. Produce an answer based on tool results.
8. Support requests that do not need tools.
9. Validate tool arguments.
10. Handle failed tools and unavailable information.
11. Provide at least eight test cases.
12. Record tool execution logs.

## Examples

- Academic advisor
- Course information agent
- Document search assistant
- Research paper finder
- Personal calendar assistant
- Financial data analysis assistant using mock data
- Travel information assistant

## Expected Architecture

User Request → LLM → Tool Selection → Tool Execution → LLM → Answer

## Acceptance Criteria

The agent must:

- Select relevant tools.
- Pass correct arguments.
- Use real tool results.
- Avoid inventing tool outputs.
- Handle unavailable data.
- Handle tool execution errors.

A hard-coded sequence of function calls is insufficient for full C-level credit.


## D-level foundations

### Objective

Build a functional LLM-powered application that solves a clearly defined problem.

### Mandatory Requirements

1. Integrate a real LLM through an API or a local model.
2. Accept user input.
3. Construct appropriate prompts.
4. Generate meaningful outputs.
5. Produce structured output where appropriate.
6. Validate generated output.
7. Handle API or model failures.
8. Provide at least five test cases.
9. Document the application.
10. Demonstrate the working implementation.

### Examples

- Quiz generator
- Text classification application
- Document summarizer
- Educational content generator
- Structured information extractor
- Email drafting assistant

### Expected Architecture

User Input → Prompt Construction → LLM → Validation → Output

### Acceptance Criteria

The application must:

- Produce useful output for valid inputs.
- Validate its required output format.
- Handle invalid user input.
- Handle model or API errors.
- Pass the documented functional tests.
