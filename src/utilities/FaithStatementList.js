import React from "react";

function FaithStatementList() {
  const lists = [
    { list: "There is one God (Deut 6:4, Matt 16:17)" },
    { list: "Jesus Christ is the Son of God (Matt 1:18-25)" },
    { list: "Jesus is the way (John 14:6)" },
    { list: "The Bible is God’s word (2 Tim 3:16)" },
    { list: "All need to be saved (Rom 3:23)" },
    { list: "Jesus Christ rose from the dead (1Cor 15:4)" },
    { list: "The dead shall rise again (1Thes 4:16-17)" },
    { list: "Jesus Christ is coming again (Acts 1:11)" },
    { list: "Water Baptism and the Lord’s supper (Matt 28:19, 26:26-29)" },
    {
      list: "Baptism of Holy Spirit and speaking in tongues(Mark 16:17-18, Acts 1:8)",
    },
  ];

  return (
    <ul style={{ marginBottom: "15px", marginLeft: "30px" }}>
      {lists.map((item, idx) => (
        <li
          key={idx}
          style={{
            listStyle: "circle",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "10px",
            color: "#FFF",
            maxWidth: "475px",
          }}
        >
          {item.list}
        </li>
      ))}
    </ul>
  );
}

export default FaithStatementList;
