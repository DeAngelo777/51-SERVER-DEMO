import { counter } from "../data/AutomaticCounter.js";
export function reqLog(req, res, next) 
{
    // console.log('Export middle ware,', Date.now());

    counter.value++;

    if (!req.pageVisitsCount) {
        req.pageVisitsCount = 1;
    } else {
        req.pageVisitsCount++;
    }

    next();
}