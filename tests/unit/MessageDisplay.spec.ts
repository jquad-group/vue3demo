import { mount } from "@vue/test-utils";
import {
  getMessage,
  MessageResponse,
  Message,
} from "@/services/MessageService";
import flushPromises from "flush-promises";
import MessageDisply from "@/components/MessageDisplay.vue";

jest.mock("@/services/MessageService");

const getMessageMocked = jest.mocked(getMessage);

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisply", () => {
  test("Calls getMessage and displays message", async () => {
    const mockedMessage = "Happy Mocked Text";
    const response: MessageResponse = {
      message: { text: "Happy Mocked Text" },
    };

    // getMessageMocked.mockResolvedValueOnce(response); if getMessageMocked is async
    getMessageMocked.mockReturnValueOnce(response);

    const wrapper = mount(MessageDisply);
    await flushPromises();

    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toEqual(mockedMessage);
  });
  test("Displays an error when getMessage call fails", async () => {
    const wrapper = mount(MessageDisply);
  });
});
