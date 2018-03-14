import Utils from "@/services/Utils";

describe("Utils", () => {
  const currentUser = {
    firstName: "Test",
    lastName: "User",
    email: "testuser@test.com"
  };

  beforeEach(() => {
    Utils.getUser = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: currentUser }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getUser", () => {
    test("returns the current user", async () => {
      const response = await Utils.getUser();
      expect(response.data).toBe(currentUser);
    });
  });
});
