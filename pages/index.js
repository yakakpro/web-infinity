import { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  {
    id: "silence",
    label: "Тиша",
    content: (
      <>
        <h1 className="text-4xl font-bold mb-4">Вузол: Тиша</h1>
        <p className="text-gray-300 text-lg">
          Тут не треба бути кимось. <br /> Просто увійди. <br /> Це початок не з форм, а з присутності.
        </p>
      </>
    ),
    next: "qnp",
  },
  {
    id: "qnp",
    label: "QNP",
    content: (
      <>
        <h1 className="text-4xl font-bold mb-4">Вузол: QNP</h1>
        <p className="text-gray-300 text-lg">
          Прості числа — це не точки. Це хвилі. Дзета — не формула, а памʼять.
        </p>
      </>
    ),
    next: null,
  },
];

export default function Home() {
  const [currentNode, setCurrentNode] = useState("silence");
  const active = nodes.find((n) => n.id === currentNode);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", maxWidth: "600px" }}
      >
        <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}>
          {active.content}
          {active.next && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentNode(active.next)}
              style={{
                marginTop: "2rem",
                background: "#fff",
                color: "#000",
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                fontSize: "1.25rem",
                border: "none",
                cursor: "pointer"
              }}
            >
              Далі: {nodes.find((n) => n.id === active.next)?.label}
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
