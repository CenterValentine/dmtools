export default (container, state) => {
    container.element.innerHTML = `
      <div style="padding: 20px; color: white;">
        <h2>${state.text}</h2>
        <ul style="line-height: 1.8;">
          <li><strong>Task Management System</strong>
            <ul>
              <li>To-Do List, Completed Tasks, Daily Goals, Weekly Plan</li>
              <li>Enhancements: Drag-and-drop tasks, API integrations</li>
            </ul>
          </li>
          <li><strong>Learning Hub</strong>
            <ul>
              <li>Notes, Reference Material, Flashcards, Progress Tracker</li>
              <li>Enhancements: Quiz generator, Spaced repetition</li>
            </ul>
          </li>
          <li><strong>Personal Finance Tracker</strong>
            <ul>
              <li>Budget Overview, Expense Tracker, Investments, Financial Goals</li>
              <li>Enhancements: API integration, Visualizations</li>
            </ul>
          </li>
          <li><strong>Developer Dashboard</strong>
            <ul>
              <li>Code Editor, API Documentation, Debugging Logs, Task Tracker</li>
              <li>Enhancements: Live preview, Git client</li>
            </ul>
          </li>
          <li><strong>Content Creator Workspace</strong>
            <ul>
              <li>Content Calendar, Drafts, Inspiration, Analytics</li>
              <li>Enhancements: Templates, API for social media</li>
            </ul>
          </li>
          <li><strong>Productivity Dashboard</strong>
            <ul>
              <li>Pomodoro Timer, Notes, Calendar, Habit Tracker</li>
              <li>Enhancements: Gamification, Calendar sync</li>
            </ul>
          </li>
          <li><strong>Health & Wellness Tracker</strong>
            <ul>
              <li>Fitness Log, Meal Plan, Sleep Tracker, Meditation</li>
              <li>Enhancements: Wearable integration, Trends visualization</li>
            </ul>
          </li>
          <li><strong>Project Management Workspace</strong>
            <ul>
              <li>Overview, Tasks, Milestones, Resources</li>
              <li>Enhancements: Gantt charts, API integrations</li>
            </ul>
          </li>
          <li><strong>Journal & Reflection Hub</strong>
            <ul>
              <li>Daily Journal, Mood Tracker, Vision Board, Reflections</li>
              <li>Enhancements: Sentiment analysis, Reminder notifications</li>
            </ul>
          </li>
        </ul>
      </div>
    `;
  }