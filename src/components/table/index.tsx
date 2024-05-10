import { Text, View } from "@react-pdf/renderer";
import React from "react";
import type { TableProps } from "../../models/table";



export const Table = ({
  columns,
  data,
  headerBackground = "#bdc3c7",
  stripedBackgroundColor = "#ecf0f1",
  noHeader = false,
  striped = false,
}: TableProps) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          borderRight: "1px solid  #636e72",
          borderLeft: "1px solid  #636e72",
          borderTop: "1px solid  #636e72",
        }}
      >
        {!noHeader && (
          <View
            style={{
              backgroundColor: headerBackground,
              display: "flex",
              flexDirection: "row",
              borderBottom: "1px solid #636e72",
            }}
          >
            {columns.map((col: any, i: number) => (
              <Text
                style={{
                  paddingTop: 5,
                  paddingBottom: 2,
                  paddingHorizontal: 8,
                  width: col?.width ?? "100%",
                  fontSize: "7px",
                  fontWeight:"bold",
                  textAlign: col?.textAlign ?? "left",
                  borderRight:
                    columns.length - 1 == i ? "none" : "1px solid #636e72",
                }}
                key={i}
              >
                {col.title}
              </Text>
            ))}
          </View>
        )}

        {data?.map((row: any, index: number) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "1px solid #636e72",
              backgroundColor:
                striped && index % 2 == 1
                  ? stripedBackgroundColor
                  : "transparent",
            }}
          >
            {columns.map((col: any, index: number) => (
              <View
                key={index}
                style={{
                  paddingTop: 5,
                  paddingBottom: 2,
                  paddingHorizontal: 8,
                  width: col?.width ?? "100%",
                  fontSize: "7px",
                  textAlign: col?.textAlign ?? "left",
                  borderRight:
                    columns.length - 1 == index ? "none" : "1px solid #636e72",
                }}
              >
                {col?.render ? (
                  col?.render?.(row)
                ) : (
                  <Text>{row[col.accessor]}</Text>
                )}
              </View>
            ))}
          </View>
        ))}
      </View>
    </>
  );
};
