import { useState } from "react";
import { Star } from "lucide-react";

export default function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex justify-center space-x-2">
      {[...Array(10)].map((_, i) => {
        const index = i + 1;
        return (
          <Star
            key={index}
            fill={index <= (hover || value) ? "#FBBF24" : "none"}
            stroke="#FBBF24"
            className="w-8 h-8 cursor-pointer"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(index)}
          />
        );
      })}
    </div>
  );
}
