import { Card } from "flowbite-react";

export default function GrandTotalRow({
    totalItemCount,
    grandTotal,
  }: {
    totalItemCount: number;
    grandTotal: number;
  }) {
    return (<>
      <Card>
      <div className="grid grid-cols-4 max-h-32 items-end gap-4 ...">
        <p className="basis-24 text-right text-xl font-semibold text-slate-200">
          {totalItemCount} item{totalItemCount === 1 ? "" : "s"}
        </p>
        <p className="basis-32 text-right text-xl font-semibold text-slate-200">
          Subtotal:
        </p>
        <p className="basis-24 text-right text-xl font-semibold text-slate-200">
          ${Math.floor(grandTotal)}
        </p>
      </div>
      </Card>
      
      </>
    );
  }