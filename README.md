# jQuery Step-Maker
A jQuery Plugin to build a step-tracker

#How to use
Step-Maker is simple, just set an array of strings for steps option. If you want to specify what steps you are
then set `currentStep` to the step, default is the first.
```
 $('.step-container').stepMaker({
    steps: ['Login', 'Acknowledgements', 'Personal Data', 'Bank Information','Tax Info'],
    currentStep: 3
  });
```
Result:
![jQuery Step-Maker Plugin](http://i.imgur.com/sEOp4Sk.jpg?1)
