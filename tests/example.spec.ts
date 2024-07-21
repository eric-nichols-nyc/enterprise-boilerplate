import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/drag-and-drop');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Drag/);
  await page.getByRole('tab', { name: 'List' }).click();
  await page.getByText('+ Add an item').click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('poop');
  await page.getByRole('textbox').press('Enter');
  await page.locator('body').click();
  await page.getByText('+ Add an item').click();
  await page.getByLabel('List').click();
  await page.getByRole('textbox').fill('crap');
  await page.getByRole('textbox').press('Enter');
  await page.locator('body').click();
  await page.getByRole('button', { name: 'crap' }).click();

});
