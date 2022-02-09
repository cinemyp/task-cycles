/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let i = start % 2 === 0 ? start : start + 1;
    let sum = 0;
    for (; i <= end; i += 2) {
        sum += i;
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 0;
    while (a > 0.1) {
        a /= 2;
        i++;
    }
    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let i = 2;
    let start = 0;
    let result = '';
    do {
        result += message.slice(start, i) + '_';
        start = i + 1;
        i += 3;
    } while (start + 3 < message.length);
    if (start < message.length) result += message.slice(start);

    return result;
}
