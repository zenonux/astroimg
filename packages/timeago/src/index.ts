import { register } from "./register";
import defaultType from "./formatTypes/default";
import detailType from "./formatTypes/detail";
import commentType from "./formatTypes/comment";
import chatType from "./formatTypes/chat";
import messageType from "./formatTypes/message";
import newsType from "./formatTypes/news";
import { format } from "./format";

register("DEFAULT", defaultType);
register("DETAIL", detailType);
register("COMMENT", commentType);
register("CHAT", chatType);
register("MESSAGE", messageType);
register("NEWS", newsType);

export { register, format };
