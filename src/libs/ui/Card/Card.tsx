import { Component } from "solid-js";
import Rating from "../Rating";

type CardProps = {
  title?: string;
  description?: string;
  starCount?: number;
  to?: string;
  onSave?: () => void;
};

const Card: Component<CardProps> = ({
  title,
  description,
  starCount,
  to,
  onSave,
}) => {
  return (
    <div class="my-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href={to}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <Rating count={starCount} />
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Card;
