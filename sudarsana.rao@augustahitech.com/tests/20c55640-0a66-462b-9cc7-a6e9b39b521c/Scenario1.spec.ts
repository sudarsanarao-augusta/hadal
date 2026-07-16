const locators = require('../locators/locators.json');
const { safeClick, safeFill, waitForResponse } = require('../utils/commands');

test('Test Scenario1 replays recorded session', async ({ page }) => {
  // Step 1: Page Load
  await page.goto('https://hadal-ai.com/projects/d9240095-6ecf-42f8-b6d9-122c63ef50bd/record-and-play');
  await page.waitForLoadState('networkidle');

  // Step 2: API Call - unread-count
  const unreadCountResponse = await waitForResponse(page, '**/api/v1/app/notifications/unread-count');
  console.log('Unread Count Response:', await unreadCountResponse.json());

  // Step 3: API Call - in-progress-count
  const inProgressCountResponse = await waitForResponse(page, '**/api/v1/app/jobs/in-progress/count');
  console.log('In Progress Count Response:', await inProgressCountResponse.json());

  // Step 4: API Call - in-progress
  const inProgressResponse = await waitForResponse(page, '**/api/v1/app/jobs/in-progress?page=1&perPage=5');
  console.log('In Progress Response:', await inProgressResponse.json());

  // Step 5: API Call - notifications
  const notificationsResponse = await waitForResponse(page, '**/api/v1/app/notifications?page=1&perPage=10&unreadOnly=false');
  console.log('Notifications Response:', await notificationsResponse.json());
});
