import sys
from PIL import Image

def make_white_background_transparent(image_path, output_path, tolerance=15):
    img = Image.open(image_path).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    visited = set()
    queue = []
    
    def is_white(r, g, b, tol):
        return (255 - r) <= tol and (255 - g) <= tol and (255 - b) <= tol
    
    # Add border pixels to start flood fill
    for x in range(width):
        for y in [0, height - 1]:
            r, g, b, a = data[x, y]
            if is_white(r, g, b, tolerance) and (x, y) not in visited:
                queue.append((x, y))
                visited.add((x, y))
                
    for y in range(height):
        for x in [0, width - 1]:
            r, g, b, a = data[x, y]
            if is_white(r, g, b, tolerance) and (x, y) not in visited:
                queue.append((x, y))
                visited.add((x, y))
                
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    
    while queue:
        cx, cy = queue.pop(0)
        r, g, b, a = data[cx, cy]
        data[cx, cy] = (r, g, b, 0)
        
        for i in range(4):
            nx = cx + dx[i]
            ny = cy + dy[i]
            if 0 <= nx < width and 0 <= ny < height:
                if (nx, ny) not in visited:
                    nr, ng, nb, na = data[nx, ny]
                    if is_white(nr, ng, nb, tolerance + 5):
                        queue.append((nx, ny))
                        visited.add((nx, ny))
                        
    img.save(output_path, "PNG")
    print(f"Successfully processed image and saved to {output_path}")

if __name__ == "__main__":
    make_white_background_transparent("public/ayseerendor.png", "public/ayseerendor_transparent.png", tolerance=45)
