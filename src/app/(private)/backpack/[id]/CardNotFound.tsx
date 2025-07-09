interface Props {
    number: number
    color: string
  }
  
  export default function CardNotFound({ number, color }: Props) {
    return (
      <div
        style={{
          backgroundColor: "#F8F9FA",
          borderRadius: 8,
          padding: 0,
          border: `8px solid ${color}`,
          position: "relative",
          overflow: "hidden",
          height: 266,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
          color: `${color}99`,
          fontSize: 48,
          fontWeight: "bold",
          cursor: "default",
        }}
        title={`Card #${number} not found`}
      >
        ?
      </div>
    )
  }
  