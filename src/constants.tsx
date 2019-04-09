import { DialogProvider } from "./components/ui/Dialog/DialogProvider";

export const APP_START      	= 0x0100000;


export const DP = new DialogProvider();



export const NUMBER_FORMAT_FUNCTION= {
    numberWithCommas: (x)=>{
        let s: string = ".";
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, s);
    },
    currencyNumber: (x, symbol)=>{
        x=parseInt(x).toFixed(0);
        return x === "£-" ? "N/A": (x < 0 ? "-":"") + symbol + Math.abs(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }, 
    currencyNumberSymbolEnd: (x, symbol)=>{
        x=parseInt(x).toFixed(0);
        return x === "£-" ? "N/A": (x < 0 ? "-":"") + Math.abs(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g) + " " + symbol
    }, 
    decimal:(x, decimalPoints)=>{
        return parseFloat(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).toFixed(decimalPoints);
    }, 
    percent:(x)=>{
        x = x*100;
        return (x).toFixed(x < 1 ? 2 : x < 10 ? 1 : 0) + "%";
    },
    seCurrency:(x, symbol)=>{
        x=parseInt(x).toFixed(0);
        return x === "£-" ? "N/A": (x < 0 ? "-":"+") + symbol + Math.abs(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    reverseCurrencyNumber:function(x, symbol){
        x=parseInt(x).toFixed(0);
        return Math.abs(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + symbol;
    }
}