export function Advertisements() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-prose justify-end px-4">
        <div className="fixed -mr-64 mt-8">
          <div className="h-24 w-48 rounded">
            <h2 className="text-sm font-bold uppercase text-zinc-500">Promoted</h2>
            <div className="mt-1 h-full w-full rounded-sm px-2 py-1 text-sm text-zinc-400 ring-1 ring-zinc-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
