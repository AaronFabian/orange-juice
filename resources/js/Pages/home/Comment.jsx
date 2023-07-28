import { timeSince } from "@/utils";

export default function Comment({ comment }) {
    const { content, user, created_at: createdAt } = comment;

    const convertedTime = timeSince(new Date(createdAt));
    return (
        <div className="flex gap-2 mb-6">
            <div className="relative inline-flex items-center justify-center flex-shrink-0 w-8 h-8 overflow-hidden bg-gray-600 rounded-full">
                {/* <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    JL
                </span> */}
                <img src="https://i.pravatar.cc/48" alt={user.name} />
            </div>
            <div>
                <p className="text-sm font-medium text-stone-50">
                    {user.name}
                    <span className="pl-4 text-stone-400">
                        {convertedTime} ago
                    </span>
                </p>
                <p className="mt-1 text-xs tracking-wide text-stone-50">
                    {content}
                </p>
            </div>
        </div>
    );
}
