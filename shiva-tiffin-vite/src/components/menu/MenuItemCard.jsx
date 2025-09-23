import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export default function MenuItemCard({ item, onAddToCart, cart, onUpdateQuantity }) {
  const fullId = `${item.id}-full`;
  const halfId = `${item.id}-half`;
  const fullQty = (cart.find(c=>c.id===fullId)?.quantity) || 0;
  const halfQty = (cart.find(c=>c.id===halfId)?.quantity) || 0;

  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-gray-100">
        <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <CardContent>
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm">Full</div>
              <div className="text-xl font-bold text-orange-600">₹{item.full_price}</div>
            </div>
            <div>
              {fullQty > 0 ? (
                <div className="flex items-center gap-2">
                  <button onClick={() => onUpdateQuantity(fullId, fullQty-1)} className="px-2">-</button>
                  <div>{fullQty}</div>
                  <button onClick={() => onUpdateQuantity(fullId, fullQty+1)} className="px-2">+</button>
                </div>
              ) : (
                <Button className="bg-orange-500 text-white" onClick={() => onAddToCart(item,false)}>Add</Button>
              )}
            </div>
          </div>

          {item.half_price && item.is_half_available && (
            <div className="mt-3 flex justify-between items-center bg-green-50 p-3 rounded">
              <div>
                <div className="text-sm">Half</div>
                <div className="text-lg font-bold text-green-600">₹{item.half_price}</div>
              </div>
              <div>
                {halfQty > 0 ? (
                  <div className="flex items-center gap-2">
                    <button onClick={() => onUpdateQuantity(halfId, halfQty-1)} className="px-2">-</button>
                    <div>{halfQty}</div>
                    <button onClick={() => onUpdateQuantity(halfId, halfQty+1)} className="px-2">+</button>
                  </div>
                ) : (
                  <Button className="bg-green-500 text-white" onClick={() => onAddToCart(item,true)}>Add</Button>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
