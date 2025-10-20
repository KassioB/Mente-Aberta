import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Substitua <REPO_NAME> pelo nome do repositório (ex: mente-aberta)
export default defineConfig({
    base: "/Mente-Aberta/",
    plugins: [react()]
});
