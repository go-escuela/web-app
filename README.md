# Next.js Project LMS

## Description

This project is a Learning Management System (LMS) designed to facilitate online learning and course management. It provides educators with tools to create and manage courses, activities, and quizzes, while offering students a platform to enroll in courses and access learning materials. Built with Next.js, React.js, and Tailwind CSS, this LMS features a responsive UI and custom components for an enhanced user experience.

## Content Table

* [Installation](#installation)
* [Naming Conventions](#naming-conventions)
* [Proyect Routes](#project-routes)
* [Project Structure](#project-structure)
* [Folders](#folders)
* [Next Best Practices](#next-best-practices)
* [Typescript Best Practices](#typescript-best-practices)
* [Git Workflow](#git-workflow)
* [License](#license)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/go-escuela/web-app.git
```

2. Install dependencies:

```bash
cd web-app
npm install
```

3. Run the development server:

```bash
npm run dev
```

Access the application at `http://localhost:3000`.

## Naming Conventions
 When to Use Each Naming Style
- PascalCase: Used for defining and exporting React components and classes.
  - Example: `UserProfile.tsx`, `UserSettingsModule.ts`.
- camelCase: Used for function names, variable names, and object properties.
  - Example: `getUserData()`, `userSettings`.
- kebab-case: Used for naming routes and file paths to ensure URL readability.
  - Example: `/user-profile`, `/settings`.
- snake_case: Used for filenames and constants to maintain consistency in configuration files.
  - Example: `config_file.ts`, `API_BASE_URL`.

## Project Routes
Located in the `app/(home)` directory:
- `/`: Main home page
  - Description: The main landing page of the application.
  - File: `page.tsx`
- `/courses/[slug]`: Individual course pages
  - Description: Displays course content based on the dynamic slug.
  - File: `app/(home)courses/[slug]/page.tsx`
- `/courses/[slug]/quiz/new`: New quiz creation page
  - Description: Allows users to create a new quiz for a specific course.
  - File: `app/(home)/courses/[slug]/quiz/new/page.tsx`
- `/courses/[slug]/quiz/edit`: Edit quiz page
  - Description: Allows users to edit an existing quiz.
  - File: `app/(home)/courses/[slug]/quiz/edit/page.tsx`
- `/courses/[slug]/quiz/[quiz-slug]`: Quiz detail page
  - Description: Displays the details of a specific quiz.
  - File: `app/(home)/courses/[slug]/quiz/[quiz-slug]/page.tsx`
- `/courses/[slug]/activity/new`: New activity creation page
  - Description: Allows users to create a new activity for a specific course.
  - File: `app/(home)/courses/[slug]/activity/new/page.tsx`
- `/courses/[slug]/activity/edit`: Edit activity page
  - Description: Allows users to edit an existing activity.
  - File: `app/(home)/courses/[slug]/activity/edit/page.tsx`
- `/courses/[slug]/activity/[activity-slug]`: Activity detail page
  - Description: Displays the details of a specific activity.
  - File: `app/(home)/courses/[slug]/activity/[activity-slug]/page.tsx`
- `/profile`: Profile
  - Description: The main profile page of the application.
  - File: `app/(home)/profile/page.tsx`
- `/login`: Login
  - Description: The Log-in a profile in the application.
  - File: `app/login/layout.tsx`

## Project Structure

|-- LICENSE
|-- README.md
|-- app
|   |-- (home)
|   |   |-- courses
|   |   |   `-- [slug]
|   |   |       |-- activity
|   |   |       |   |-- edit
|   |   |       |   |   `-- page.tsx
|   |   |       |   |-- new
|   |   |       |   |   `-- page.tsx
|   |   |       |   `-- view
|   |   |       |       `-- [activity-view-slug]
|   |   |       |           `-- page.tsx
|   |   |       |-- page.tsx
|   |   |       |-- quiz
|   |   |       |   |-- edit
|   |   |       |   |   `-- page.tsx
|   |   |       |   |-- new
|   |   |       |   |   `-- page.tsx
|   |   |       |   `-- view
|   |   |       |       `-- [quiz-slug]
|   |   |       |           `-- page.tsx
|   |   |       `-- topic
|   |   |           `-- page.tsx
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   `-- profile
|   |       `-- page.tsx
|   |-- components
|   |   |-- Breadcrumbs
|   |   |   `-- Breadcrumb.tsx
|   |   |-- Header
|   |   |   |-- DropdownUser.tsx
|   |   |   `-- index.tsx
|   |   |-- Home
|   |   |   |-- CardDataStats.tsx
|   |   |   `-- index.tsx
|   |   |-- Sidebar
|   |   |   `-- index.tsx
|   |   |-- Tables
|   |   |   `-- TableThree.tsx
|   |   |-- common
|   |   |   `-- Loader
|   |   |       `-- index.tsx
|   |   |-- courses
|   |   |   |-- ActivityList.tsx
|   |   |   |-- NewActivityOrQuizModal.tsx
|   |   |   |-- activity
|   |   |   |   |-- ActivityView.tsx
|   |   |   |   |-- EditActivity.tsx
|   |   |   |   `-- NewActivity.tsx
|   |   |   |-- quiz
|   |   |   |   |-- EditQuiz.tsx
|   |   |   |   |-- NewQuiz.tsx
|   |   |   |   |-- QuizView.tsx
|   |   |   |   `-- questions
|   |   |   |       |-- newQuestions
|   |   |   |       |   |-- NewBooleanQuestion.tsx
|   |   |   |       |   |-- NewOpenQuestion.tsx
|   |   |   |       |   |-- NewQuestion.tsx
|   |   |   |       |   |-- multipleChoiceQuestions
|   |   |   |       |   |   |-- NewMultipleChoice.tsx
|   |   |   |       |   |   `-- NewMultipleChoiceQuestion.tsx
|   |   |   |       |   `-- uniqueChoiceQuestions
|   |   |   |       |       |-- NewSingleChoice.tsx
|   |   |   |       |       `-- NewSingleChoiceQuestion.tsx
|   |   |   |       `-- viewsQuestion
|   |   |   |           |-- BooleanQuestionView.tsx
|   |   |   |           |-- MultipleChoiceQuestionView.tsx
|   |   |   |           |-- OpenQuiestionView.tsx
|   |   |   |           `-- SingleChoiceQuestionView.tsx
|   |   |   `-- topic
|   |   |       `-- NewTopic.tsx
|   |   `-- users
|   |       |-- StudentStats.tsx
|   |       `-- UsersList.tsx
|   |-- css
|   |   `-- style.css
|   |-- layout.tsx
|   |-- lib
|   |   |-- custom
|   |   |   `-- tabs.tsx
|   |   |-- types
|   |   |   |-- faq.ts
|   |   |   |-- faqItem.ts
|   |   |   `-- package.ts
|   |   `-- utils.ts
|   `-- login
|       `-- page.tsx
|-- next.config.mjs
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- prettier.config.js
|-- public
|   `-- images
|       |-- courses
|       |   |-- art_icon.png
|       |   |-- english_icon.png
|       |   |-- lang_icon.png
|       |   |-- math_icon.png
|       |   |-- natural_icon.png
|       |   |-- religion_icon.png
|       |   |-- social_icon.png
|       |   `-- tech_icon.png
|       `-- logo
|           |-- logo-bg.png
|           |-- logo-bg2.png
|           `-- logo.png
|-- tailwind.config.ts
`-- tsconfig.json

44 directories, 70 files

## Folders

**(home)**: This folder cntrole the url pages, layouts, and components related to the home section of the application.
**courses**: This folder contains the code for handling courses.
**[slug]**: This folder likely contains the pages and components for individual course pages, with dynamic slugs (URL segments) representing each course.
**activity**: This folder contains the components and pages related to course activities.
**edit**: This folder contains the page for editing an activity.
**new**: This folder contains the page for creating a new activity.
**view**: This folder contains the page for viewing an activity.
**quiz**: This folder contains the components and pages related to course quizzes.
**edit**: This folder contains the page for editing a quiz.
**new**: This folder contains the page for creating a new quiz.
**view**: This folder contains the page for viewing a quiz.
**topic**: This folder contains the page(s) related to course topics.
**profile**: This folder contains the page(s) for the user profile section.
**components**: This folder contains reusable UI components used throughout the application.
**Breadcrumbs**: This folder contains the component(s) for displaying breadcrumbs (navigational aid).
**Header**: This folder contains the component(s) for the header section of the application.
**Home**: This folder contains the component(s) for the home section of the application.
**Sidebar**: This folder contains the component(s) for the sidebar section of the application.
**Tables**: This folder contains the component(s) for displaying data in a tabular format.
**common**: This folder contains common or shared components.
**Loader**: This folder contains the component(s) for displaying loading indicators.
**courses**: This folder contains components specific to the courses section of the application.
**activity**: This folder contains components related to course activities.
**quiz**: This folder contains components related to course quizzes.
**questions**: This folder contains components for handling different types of questions.
**newQuestions**: This folder contains components for creating new questions.
**multipleChoiceQuestions**: This folder contains components for multiple-choice questions.
**uniqueChoiceQuestions**: This folder contains components for single-choice questions.
**viewsQuestion**: This folder contains components for displaying questions.
**topic**: This folder contains components related to course topics.
**users**: This folder contains components related to user management and profiles.
**css**: This folder likely contains global CSS styles for the application.
**lib**: This folder contains utility functions, helper classes, or modules used across the application.
**custom**: This folder contains custom utilities or libraries.
**types**: This folder contains TypeScript type definitions and interfaces.
**login**: This folder contains the page(s) for the login section of the application.
**public**: This folder contains static assets like images that are served directly by the Next.js server.
**images**: This folder contains the image assets used in the application.
**courses**: This folder contains images related to courses.
**logo**: This folder contains logo images used in the application.

## Next Best Practices
To maintain clean and efficient code in Next.js:
- Use SSR or SSG as needed.
- Keep routes organized.
- Leverage API routes for server-side functions.

[More best practices](https://rohandalvii.medium.com/next-js-best-practices-tips-for-clean-and-efficient-code-99dd31a14797).

## TypeScript Best Practices
- Always define types and interfaces.
- Use `tsconfig.json` to configure the compiler.
- Avoid using `any`.
  
[More best practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-cdk-typescript-iac/typescript-best-practices.html)

### Git Workflow

1. **Clone the Repository**: Clone the repository to your local machine.

```bash
git clone https://github.com/go-escuela/web-app.git
```

2. **Create a New Branch**: Create a new branch for your feature or bugfix.

```bash
git checkout -b feature/new-feature
```

3. **Make Changes and Commit**: Make the necessary changes and commit frequently with descriptive messages.

```bash
git add -p
git commit -m "feat: describe the new feature"
```

4. **Update Main Branch**: Ensure your branch is up-to-date with the main branch.

```bash
git checkout main
git pull origin main
git checkout feature/new-feature
git rebase main
```

5. **Create a Pull Request**: Create a pull request from your feature branch to the main branch.

6. **Review and Approve**: Review and approve pull requests from other developers before merging.

7. **Merge and Delete Branch**: Merge the branch.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.