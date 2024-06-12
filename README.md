# Next.js Project LMS

## Description

This is a Next.js project bootstrapped with create-next-app. It provides a file structure and components ready to develop a modern and scalable web application.

## Content Table

* [Installation](#installation)
* [Naming Conventions](#naming-conventions)
* [Proyect Routes](#project-routes)
* [Project Structure](#project-structure)
* [Components](#components)
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

## Components

Breadcrumbs
- Component: Breadcrumb
- Route: components/Breadcrumbs/Breadcrumb.tsx
- Functionality: Displays the current navigation path for the user.

##Header
- Components: DropdownUser, Header
- Route: components/Header/DropdownUser.tsx
- Functionality: Displays a dropdown menu with user options like profile and settings.

##Home
- Components: CardDataStats
- Route: components/Home/CardDataStats.tsx
- Functionality: Displays statistics and relevant data in card format on the home page.

##Sidebar
- Components: index
- Route: components/Sidebar/index.tsx
- Functionality: Displays a sidebar menu with navigation links and options.

##Tables
- Components: TableThree
- Route: components/Tables/TableThree.tsx
- Functionality: Component to display data in table format.

##Loader (Common)
- Components: index
- Route: components/common/Loader/index.tsx
- Functionality: Displays a loading indicator while processing a request or action.

##Courses

##Activity List
- Components: ActivityList
- Route: components/courses/ActivityList.tsx
- Functionality: Displays a list of activities related to a course.

##New Activity or Quiz Modal
- Components: NewActivityOrQuizModal
- Route: components/courses/NewActivityOrQuizModal.tsx
- Functionality: Modal to create new activities or quizzes related to a course.

##Activity
- Components: ActivityView, EditActivity, NewActivity
- Route: components/courses/activity/
- Functionality: Detailed view, editing, and creation of activities.

##Quiz
- Components: EditQuiz, NewQuiz, QuizView
- Route: components/courses/quiz/
- Functionality: Editing, creation, and detailed view of quizzes.

##Questions
- Components: 
  - NewBooleanQuestion, NewOpenQuestion, NewQuestion,
  - NewMultipleChoice, NewMultipleChoiceQuestion,
  - NewSingleChoice, NewSingleChoiceQuestion,
  - BooleanQuestionView, MultipleChoiceQuestionView,
  - OpenQuestionView, SingleChoiceQuestionView
- Route: components/courses/quiz/questions/
- Functionality: Creation and detailed view of different types of questions.

##Topic
- Components: NewTopic
- Route: components/courses/topic/
- Functionality: Form to create a new topic related to a course.

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