import { useState } from "react";

const faceShapes = [
    { id: "oval", label: "Oval" },
    { id: "round", label: "Round" },
    { id: "square", label: "Square" },
    { id: "heart", label: "Heart" },
    { id: "diamond", label: "Diamond" },
  ];
  
const FaceShapeSelector = () => {

    const [selected, setSelected] = useState<string | null>(null);
    
    return(
        <div className="max-w-md mx-auto p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Select Your Face Shape</h2>
        <div className="grid grid-cols-3 gap-4">
          {faceShapes.map((shape) => (
            <button
              key={shape.id}
              onClick={() => setSelected(shape.id)}
              className={`border rounded-lg p-4 text-center hover:bg-purple-100 transition ${
                selected === shape.id ? "bg-purple-300 border-purple-700" : "border-gray-300"
              }`}
            >
              {/* Replace with image or icon if you want */}
              <div className="text-lg font-semibold">{shape.label}</div>
            </button>
          ))}
        </div>
        {selected && (
          <p className="mt-6 text-center">
            You selected: <strong>{selected.charAt(0).toUpperCase() + selected.slice(1)}</strong>
          </p>
        )}
      </div>
    );
}
export default FaceShapeSelector;