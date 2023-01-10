import { test, expect } from "@playwright/test";
import { INTERNAL_URL } from "@/constants/url";

// import { businessLinkObj } from "shared-constant/e2e/internalURL";
// import { loginTester } from "../../common/common.spec";

// test.beforeEach(async ({ page }) => {
//   await page.goto(businessLinkObj.BASE_URL);
//   await loginTester(page);
//   await page.goto(businessLinkObj.JD_LIST);
// });

test.describe("공고 리스트 테스트", () => {
  test("공고 등록하기 버튼 테스트", async ({ page }) => {
    await page.goto(INTERNAL_URL.JD_LIST);

    await page.getByText("공고 등록").click();
    expect(page.url().includes("jd/upload"));
  });

  test("타이틀 테스트", async ({ page }) => {
    await page.goto(INTERNAL_URL.JD_LIST);

    await expect(page.locator("h2")).toHaveText("공고 목록");
  });

  test("공고 리스트 요소 개수 테스트", async ({ page }) => {
    await page.goto(INTERNAL_URL.JD_LIST);

    const [jdListResponse] = await Promise.all([
      page.waitForResponse((response) => response.url().includes("/jds") && response.status() === 200),
    ]);

    const jdListData = await jdListResponse.json();

    await expect(page.locator("main>div>section").nth(1).locator(">div")).toHaveCount(jdListData.count);
  });
});
