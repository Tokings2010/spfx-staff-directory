import * as React from 'react';
import styles from './Paging.module.scss';
import { IconButton } from 'office-ui-fabric-react';
var Paging = function (_a) {
    var count = _a.count, page = _a.page, pageSize = _a.pageSize, onPageChange = _a.onPageChange;
    var selected = React.useRef(page);
    var pageLength = count === 0 ? 1 : Math.ceil(count / pageSize);
    var handleChange = React.useCallback(function (e) {
        var num = Number(e.currentTarget.ariaValueNow);
        if (!Number.isNaN(num)) {
            selected.current = num;
            onPageChange(num);
        }
    }, [onPageChange]);
    var clickNext = React.useCallback(function () {
        selected.current = Math.min(selected.current + 1, pageLength);
        onPageChange(selected.current);
    }, [pageLength, onPageChange]);
    var clickBack = React.useCallback(function () {
        selected.current = Math.max(selected.current - 1, 1);
        onPageChange(selected.current);
    }, [onPageChange]);
    React.useEffect(function () {
        selected.current = 1;
    }, [count, pageSize]);
    var pages = function () {
        var elements = [];
        var maxPageItems = 5; // Set the maximum number of page items to display (both preceding and succeeding)
        var startPage = Math.max(1, page - Math.floor(maxPageItems / 2));
        var endPage = Math.min(pageLength, startPage + maxPageItems - 1);
        if (endPage - startPage < maxPageItems - 1) {
            // Adjust startPage if the range has fewer items than the desired maxPageItems
            startPage = Math.max(1, endPage - maxPageItems + 1);
        }
        for (var i = startPage; i <= endPage; i++) {
            elements.push(React.createElement(IconButton, { key: i, "aria-valuenow": i, className: "".concat(styles.page, " ").concat(selected.current === i && styles.active), onClick: handleChange }, i));
        }
        return React.createElement("div", { className: styles.pages }, elements);
    };
    return (React.createElement("div", { className: styles.paging },
        React.createElement("div", { className: styles.count }, count > 0 ? "There are ".concat(count, " results") : "No results"),
        React.createElement("div", { className: styles.pageActions, style: { display: count === 0 ? 'none' : 'flex' } },
            pages(),
            React.createElement(IconButton, { onClick: clickBack, disabled: selected.current === 1, iconProps: { iconName: 'Back' } }),
            React.createElement(IconButton, { onClick: clickNext, disabled: selected.current === pageLength, iconProps: { iconName: 'Forward' } }, "Next"))));
};
export default Paging;
//# sourceMappingURL=Paging.js.map