import { DATA } from '../data';

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-neutral-900 mt-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-neutral-500 text-sm">
          Designed and built by <span className="text-neutral-300 font-medium">{DATA.name}</span>
        </p>
      </div>
    </footer>
  );
}
