(function () {
    const annotate = RoughNotation.annotate;
    const annotationGroup = RoughNotation.annotationGroup;
    const $ = (t) => document.querySelector(t);
  
    // export interface RoughAnnotationConfig {
    //   type: RoughAnnotationType;
    //   animate?: boolean; // defaults to true
    //   animationDuration?: number; // defaulst to 1000ms
    //   animationDelay?: number; // default = 0
    //   color?: string; // defaults to currentColor
    //   strokeWidth?: number; // default based on type
    //   padding?: number; // defaults to 5px
    // }
  
    {
      // top
      const a1 = annotate($('h4'), { type: 'highlight', color: '#FFF176'});
      const a2 = annotate($('h6'), { type: 'box', color: '#FFF176', padding: 1});
      const a3 = annotate($('a.link'), { type: 'underline', color: '#3ecf8e', animate: false, padding: 3});
      const a4 = annotate($('a.email'), { type: 'underline', color: '#3ecf8e', animate: false, padding: 3});
      const a5 = annotate($('a.twitter'), { type: 'underline', color: '#3ecf8e', animate: false, padding: 3});
      const a6

    //   const ag = annotationGroup([a1, a2, a3]);
      a1.show();
    //   a2.show();
      a3.show();
      a4.show();
      a5.show();    
    }})();