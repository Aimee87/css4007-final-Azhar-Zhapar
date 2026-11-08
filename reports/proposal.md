# Project Proposal — Semester Week 10

## Project Title

AI Research Paper Finder

## Problem Description

Students often spend a lot of time looking for research papers. It can be hard to find useful papers and understand what they are about. This project helps users find papers on a topic and get short summaries quickly.

## Target Users

Students
Researchers

## Selected Difficulty

C Level

## Expected Functionality

Search papers by topic.

Show paper titles.

Generate short summaries.

Answer user questions about papers.

Use AI to choose the correct tool.

## Proposed Functions

Function Name: search_papers

Purpose: Search for research papers by topic.

Input: topic (string)

Output: list of papers

Dependencies: Paper search API

Function Name: get_paper_summary

Purpose: Generate a short summary of a paper.

Input: title (string)

Output: summary (string)

Dependencies: OpenAI API

Function Name: validate_input

Purpose: Check if the user input is valid.

Input: query (string)

Output: true or false

Dependencies: None

## Proposed Agent Tools

Tool 1: search_papers

Purpose: Search for research papers on a given topic.

Tool 2: get_paper_summary

Purpose: Generate a short summary of a selected paper.

## Model Selection

DeepSeek (The model will be used to understand user requests, select tools, and generate responses).

## Architecture

User Request ↓ DeepSeek ↓ Tool Selection ↓ Tool Execution ↓ Final Answer

## Example Requests

Find papers about machine learning.

Find papers about artificial intelligence.

Summarize a paper about neural networks.

## Evaluation Plan

The project will be tested with different user requests.

The evaluation will check:

Paper search works correctly.

Paper summaries are generated correctly.

Tools are selected correctly.

Invalid input is handled properly.

The system generates useful responses.

## Weekly Milestones

Week 10: Project proposal and planning.

Week 11: Set up the development environment and select the AI model.

Week 12: Implement paper search functionality.

Week 13: Implement paper summarization functionality.

Week 14: Integrate tools with the AI agent.

Week 15: Add error handling and input validation.

Week 16: Testing and system improvements.

Week 17: Final report, project presentation, and defense.
