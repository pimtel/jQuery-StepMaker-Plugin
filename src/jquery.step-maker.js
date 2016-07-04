(function ($) {
    "use strict";

    var StepMaker = function (container, options) {

        options = options || {};
        container = $(container);

        var defaults = {
            steps: [],
            currentStep: 1
        };

        var calcHorizontalBarWidth = function (width, steps) {
            return width / steps;
        };

        var calcPosition = function (width) {
            return width / 2;
        };

        var buildBarCss = function (width, horizontalWidth, leftPostion) {
            return {
                'width': (width - horizontalWidth) + 'px',
                'left': leftPostion + 'px'
            };
        };

        var steps = options.steps || defaults.steps,
            currentStep = options.currentStep || defaults.currentStep,
            containerWidth = container.width(),
            horizontalBarWidth,
            leftPostionBar,
            html = {
                stepContainer: $('<div class="step-maker-container">'),
                steps: $('<div class="step-maker">'),
                bar: $('<hr>')
            };

        var createElement = function (element, html, classes) {
            var elementCreated = $(element).html(html);
            if (classes) {
                elementCreated.addClass(classes);
            }
            return elementCreated;
        };

        this.build = function () {
            container = $(container);

            var stepWidth = containerWidth / steps.length;

            if (currentStep > steps.length || currentStep <= 0)
                currentStep = 1;

            $.each(steps, function (index, step) {
                // Non zero-based
                index++;

                var stepItem = createElement('<div>', '', 'step'),
                    stepNumberLabel = createElement('<label>', '', 'step-number'),
                    span = createElement('<span>', index),
                    stepNameLabel = createElement('<label>', step);

                if (currentStep === index)
                    stepItem.addClass("active");

                stepItem.css({
                    'min-width': stepWidth + 'px',
                    'max-width': stepWidth + 'px'
                });

                stepNumberLabel.html(span);

                stepItem.append(stepNumberLabel);
                stepItem.append(stepNameLabel);

                html.steps.append(stepItem);
            });

            horizontalBarWidth = calcHorizontalBarWidth(containerWidth, steps.length);
            leftPostionBar = calcPosition(horizontalBarWidth);

            html.bar.css(buildBarCss(containerWidth, horizontalBarWidth, leftPostionBar));
            html.stepContainer.prepend(html.bar);
            html.stepContainer.append(html.steps);

            container.empty();
            container.html(html.stepContainer);
        };

    };

    $.fn.stepMaker = function (options) {
        var step = new StepMaker(this, options);
        step.build();
    };

})(jQuery);
