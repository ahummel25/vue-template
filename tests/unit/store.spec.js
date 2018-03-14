import { mutations, actions } from "@/store";

// destructure assign `mutations`
const { setUser, showMessenger, setMessenger, setOldBrowser } = mutations;

describe("Vuex Mutations", () => {
  let state;

  beforeEach(() => {
    state = {
      user: undefined,
      isOldBrowser: false,
      showMessenger: false,
      messengerOpts: {}
    };
  });

  test("setUser sets the user property", () => {
    const user = {
      firstName: "John",
      lastName: "Watson",
      email: "docwatson@holmes.co.uk",
      id: 2
    };

    expect(state.user).toBeUndefined();
    setUser(state, user);
    expect(state.user).not.toBeUndefined();
    expect(state.user.firstName).toEqual("John");
  });

  test("setOldBrowser sets the isOldBrowser property", () => {
    expect(state.isOldBrowser).toEqual(false);
    setOldBrowser(state, true);
    expect(state.isOldBrowser).toEqual(true);
  });

  test("showMessenger sets the showMessenger property", () => {
    expect(state.showMessenger).toEqual(false);
    showMessenger(state, true);
    expect(state.showMessenger).toEqual(true);
    showMessenger(state, false);
    expect(state.showMessenger).toEqual(false);
  });

  test("setMessenger sets messengerOpts", () => {
    expect(state.messengerOpts.title).toBeUndefined();
    setMessenger(state, { title: "Custom Title" });
    expect(state.messengerOpts.title).toEqual("Custom Title");
  });
});

describe("Vuex Actions", () => {
  let mockState;

  beforeEach(() => {
    mockState = {
      user: { wwtUserId: 1 },
      isOldBrowser: false,
      showMessenger: false,
      messengerOpts: {}
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("setIsOldBrowser updates the isOldBrowser property", () => {
    let mockCommit = (type, payload) => {
      mockState.isOldBrowser = payload;
    };

    expect(mockState.isOldBrowser).toEqual(false);
    actions.setIsOldBrowser({ commit: mockCommit }, true);
    expect(mockState.isOldBrowser).toEqual(true);
  });

  test("setMessenger updates the messengerOpts property", () => {
    let mockCommit = (type, payload) => {
      mockState.messengerOpts = payload;
    };

    expect(mockState.messengerOpts.title).toBeUndefined();
    actions.setMessenger({ commit: mockCommit }, { title: "Custom Title" });
    expect(mockState.messengerOpts.title).toEqual("Custom Title");
  });

  test("showMessenger sets the showMessenger property to true", () => {
    let mockCommit = () => {
      mockState.showMessenger = true;
    };

    expect(mockState.showMessenger).toEqual(false);
    actions.showMessenger({ commit: mockCommit });
    expect(mockState.showMessenger).toEqual(true);
  });

  test("hideMessenger sets the showMessenger property to false", () => {
    let mockCommit = () => {
      mockState.showMessenger = false;
    };

    mockState.showMessenger = true;
    expect(mockState.showMessenger).toEqual(true);
    actions.hideMessenger({ commit: mockCommit });
    expect(mockState.showMessenger).toEqual(false);
  });
});
