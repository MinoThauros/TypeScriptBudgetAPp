/**
 * Calculates the perimeter of the specified shape.
 *
 * @param shape - The shape of the object ('rectangle' or 'circle').
 * @param area - The area of the shape.
 * @returns The perimeter of the shape.
 */
const calculatePerimeter = (shape: 'rectangle' | 'circle', area: number): number => {
    if (shape === 'rectangle') {
        let length = Math.sqrt(area);
        let width = Math.sqrt(area);
        return 2 * (length + width);
    } else if (shape === 'circle') {
        let radius = Math.sqrt(area / Math.PI);
        return 2 * Math.PI * radius;
    }

    throw new Error('Invalid shape');
}

/**
 * Calculates the diagonal of a rectangle or the diameter of a circle.
 *
 * @param shape - The shape of the object ('rectangle' or 'circle').
 * @param perimeter - The perimeter of the shape.
 * @returns The diagonal of the rectangle or diameter of the circle.
 */
const calculateDiagonalOrDiameter = (shape: 'rectangle' | 'circle', perimeter: number): number => {
    if (shape === 'rectangle') {
        let side = perimeter / 4;
        return Math.sqrt(2) * side;
    } else if (shape === 'circle') {
        return perimeter / Math.PI;
    }

    throw new Error('Invalid shape');
}

/**
 * Main function to find the dinagonal of a shape given its area its area.
 *
 * @param shape - The shape of the object ('rectangle' or 'circle').
 * @param area - The area of the shape.
 */
const mainFunction = (shape: 'rectangle' | 'circle', area: number): number => {
    const perimeter = calculatePerimeter(shape, area);
    console.log(`Perimeter: ${perimeter}`);

    const diagonalOrDiameter = calculateDiagonalOrDiameter(shape, perimeter);
    console.log(`Diagonal/Diameter: ${diagonalOrDiameter}`);
    return diagonalOrDiameter
}

// Call main function
mainFunction('rectangle', 25);
mainFunction('circle', 78.5);