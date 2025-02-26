type Props = {
  onMinus: () => void;
  onPlus: () => void;
};

export default function CountControls({ onMinus, onPlus }: Props) {
  return (
    <div className="flex gap-4 *:w-12 *:h-6 *:bg-slate-200 *:border *:border-slate-900 *:flex *:justify-center *:items-center *:text-2x">
      <button
        className="hover:bg-slate-400 active:bg-slate-600"
        onClick={() => onMinus()}
      >
        -
      </button>
      <button
        className="hover:bg-slate-400 active:bg-slate-600"
        onClick={() => onPlus()}
      >
        +
      </button>
    </div>
  );
}
