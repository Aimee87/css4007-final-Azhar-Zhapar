# Semester Week 13 Progress Report

## Completed Work
Implemented two project tools.
Created the search_papers tool for finding research papers.
Created the summarize_paper tool for generating paper summaries.
Implemented Gemini-based tool selection.
Tested tool selection and tool execution with different requests.
Improved the application workflow.

## Important Commits
Implemented the search_papers tool.
Implemented the summarize_paper tool.
Added Gemini-based tool selection.
Tested tool selection and tool execution.

## Current Functionality
The user can search for research papers on a selected topic.
The user can request a summary of a specific research paper.
The Gemini model automatically selects the appropriate tool based on the user request.
The selected tool is executed automatically.
The application displays either research paper recommendations or a paper summary.

## Problems Encountered
Difficulty understanding how tool selection should work in an AI agent.
Challenges implementing multiple tools in a single application.
Initially used keyword-based tool selection, which did not fully satisfy the C-Level requirements.
Understanding how to allow the Gemini model to select the appropriate tool.

## Solutions
Implemented separate tools for paper search and paper summarization.
Replaced keyword-based routing with Gemini-based tool selection.
Tested tool selection using different user requests.
Verified that both tools execute successfully and return the expected results.
Improved the agent workflow by connecting tool selection and tool execution.

## What I Learned
- I learned how AI agents use tools to perform different tasks.
- I learned how to implement multiple tools in a single application.
- I learned how LLM-based tool selection works.
- I improved my understanding of tool execution and agent workflows.
- I gained more experience using the Gemini API for decision-making and task execution.

## Next Week
Improve the tool-calling workflow.
Add tool error handling.
Improve validation and reliability.
Add additional test cases.
Continue developing the AI Research Paper Finder.
