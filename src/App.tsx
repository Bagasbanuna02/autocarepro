// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import CarRepairLanding from "./app/index"

export function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        primaryColor: "blue",
        colors: {
          blue: [
            "#e6f0ff",
            "#b3d1ff",
            "#80b3ff",
            "#4d94ff",
            "#1a75ff",
            "#005ce6",
            "#0047b3",
            "#003380",
            "#001a4d",
            "#000d26",
          ],
        },
      }}
    >
      <CarRepairLanding />
    </MantineProvider>
  );
}

export default App;
