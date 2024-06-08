This is a Next.js project bootstrapped with create-next-app.

Getting Started

 Git Workflow
1. Clone the repository:
 
   git clone https://github.com/go-escuela/web-app.git
  
2. Create a new branch:
   
   git checkout -b branch-name (feat, fix, performance, refactoring, documentation)
  
3. Make changes and commit:
  
   git add -p
   git commit -m "Description of changes"
  
4. Push changes:
  
   git push origin branch-name
  
5. Create a Pull Request on GitHub.
  

 Naming Conventions
 When to Use Each Naming Style
- PascalCase: Used for defining and exporting React components and classes.
  - Example: `UserProfile.tsx`, `UserSettingsModule.ts`.
- camelCase: Used for function names, variable names, and object properties.
  - Example: `getUserData()`, `userSettings`.
- kebab-case: Used for naming routes and file paths to ensure URL readability.
  - Example: `/user-profile`, `/settings`.
- snake_case: Used for filenames and constants to maintain consistency in configuration files.
  - Example: `config_file.ts`, `API_BASE_URL`.

 Project Routes
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

Modules and Components

Components

Breadcrumbs
- Component: Breadcrumb
- Route: components/Breadcrumbs/Breadcrumb.tsx
- Functionality: Displays the current navigation path for the user.

Header
- Components: DropdownUser, Header
- Route: components/Header/DropdownUser.tsx
- Functionality: Displays a dropdown menu with user options like profile and settings.

Home
- Components: CardDataStats
- Route: components/Home/CardDataStats.tsx
- Functionality: Displays statistics and relevant data in card format on the home page.

Sidebar
- Components: index
- Route: components/Sidebar/index.tsx
- Functionality: Displays a sidebar menu with navigation links and options.

Tables
- Components: TableThree
- Route: components/Tables/TableThree.tsx
- Functionality: Component to display data in table format.

Loader (Common)
- Components: index
- Route: components/common/Loader/index.tsx
- Functionality: Displays a loading indicator while processing a request or action.

Courses

Activity List
- Components: ActivityList
- Route: components/courses/ActivityList.tsx
- Functionality: Displays a list of activities related to a course.

New Activity or Quiz Modal
- Components: NewActivityOrQuizModal
- Route: components/courses/NewActivityOrQuizModal.tsx
- Functionality: Modal to create new activities or quizzes related to a course.

Activity
- Components: ActivityView, EditActivity, NewActivity
- Route: components/courses/activity/
- Functionality: Detailed view, editing, and creation of activities.

Quiz
- Components: EditQuiz, NewQuiz, QuizView
- Route: components/courses/quiz/
- Functionality: Editing, creation, and detailed view of quizzes.

Questions
- Components: 
  - NewBooleanQuestion, NewOpenQuestion, NewQuestion,
  - NewMultipleChoice, NewMultipleChoiceQuestion,
  - NewSingleChoice, NewSingleChoiceQuestion,
  - BooleanQuestionView, MultipleChoiceQuestionView,
  - OpenQuestionView, SingleChoiceQuestionView
- Route: components/courses/quiz/questions/
- Functionality: Creation and detailed view of different types of questions.

Topic
- Components: NewTopic
- Route: components/courses/topic/
- Functionality: Form to create a new topic related to a course.

 Next.js Best Practices
To maintain clean and efficient code in Next.js:
- Use SSR or SSG as needed.
- Keep routes organized.
- Leverage API routes for server-side functions.

[More best practices](https://rohandalvii.medium.com/next-js-best-practices-tips-for-clean-and-efficient-code-99dd31a14797).

 TypeScript Best Practices
- Always define types and interfaces.
- Use `tsconfig.json` to configure the compiler.
- Avoid using `any`.
  
[More best practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-cdk-typescript-iac/typescript-best-practices.html)

 Installation Locally
1. Clone the repository:
  bash
   git clone https://github.com/go-escuela/web-app.git
  
2. Install dependencies:
  bash
   cd web-app
   npm install
  
3. Run the development server:
  bash
   npm run dev
  
   Access at `http://localhost:3000`.

 Lint Commit Messages
Use [commitlint](https://commitlint.js.org/) to ensure commit messages follow a proper format:
- Install commitlint:
 bash
  npm install --save-dev @commitlint/{config-conventional,cli}
 
- Create a configuration file `commitlint.config.js`:
 javascript
  module.exports = {extends: ['@commitlint/config-conventional']};
 
- Integrate with Husky:
 bash
  npx husky install
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
 
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

