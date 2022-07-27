import React from 'react';
import { IProductAttr } from '..';

export interface Props {
  attribute: IProductAttr;
}

export const ProductAttribute: React.FC<Props> = ({ attribute }) => {
  return (
    <fieldset>
      <legend className="mb-1 text-sm font-medium">{attribute.key}</legend>

      <div className="flow-root">
        <div className="flex flex-wrap -m-0.5">
          {attribute.values.map((value, vIndex) => {
            return (
              <label
                key={vIndex}
                htmlFor="color_tt"
                className="cursor-pointer p-0.5"
              >
                <input
                  type="radio"
                  name="color"
                  id="color_tt"
                  className="sr-only peer"
                />

                <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                  {value}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </fieldset>
  );
};
