"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const renderer_1 = require("@react-pdf/renderer");
const react_1 = __importDefault(require("react"));
const Table = ({ columns, data, headerBackground = "#bdc3c7", stripedBackgroundColor = "#ecf0f1", noHeader = false, striped = false, }) => {
    return (<>
      <renderer_1.View style={{
            width: "100%",
            borderRight: "1px solid  #636e72",
            borderLeft: "1px solid  #636e72",
            borderTop: "1px solid  #636e72",
        }}>
        {!noHeader && (<renderer_1.View style={{
                backgroundColor: headerBackground,
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid #636e72",
            }}>
            {columns.map((col, i) => {
                var _a, _b;
                return (<renderer_1.Text style={{
                        paddingTop: 5,
                        paddingBottom: 2,
                        paddingHorizontal: 8,
                        width: (_a = col === null || col === void 0 ? void 0 : col.width) !== null && _a !== void 0 ? _a : "100%",
                        fontSize: "7px",
                        fontWeight: "bold",
                        textAlign: (_b = col === null || col === void 0 ? void 0 : col.textAlign) !== null && _b !== void 0 ? _b : "left",
                        borderRight: columns.length - 1 == i ? "none" : "1px solid #636e72",
                    }} key={i}>
                {col.title}
              </renderer_1.Text>);
            })}
          </renderer_1.View>)}

        {data === null || data === void 0 ? void 0 : data.map((row, index) => (<renderer_1.View key={index} style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid #636e72",
                backgroundColor: striped && index % 2 == 1
                    ? stripedBackgroundColor
                    : "transparent",
            }}>
            {columns.map((col, index) => {
                var _a, _b, _c;
                return (<renderer_1.View key={index} style={{
                        paddingTop: 5,
                        paddingBottom: 2,
                        paddingHorizontal: 8,
                        width: (_a = col === null || col === void 0 ? void 0 : col.width) !== null && _a !== void 0 ? _a : "100%",
                        fontSize: "7px",
                        textAlign: (_b = col === null || col === void 0 ? void 0 : col.textAlign) !== null && _b !== void 0 ? _b : "left",
                        borderRight: columns.length - 1 == index ? "none" : "1px solid #636e72",
                    }}>
                {(col === null || col === void 0 ? void 0 : col.render) ? ((_c = col === null || col === void 0 ? void 0 : col.render) === null || _c === void 0 ? void 0 : _c.call(col, row)) : (<renderer_1.Text>{row[col.accessor]}</renderer_1.Text>)}
              </renderer_1.View>);
            })}
          </renderer_1.View>))}
      </renderer_1.View>
    </>);
};
exports.Table = Table;
