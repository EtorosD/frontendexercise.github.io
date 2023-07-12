const image = document.getElementById('myImage');
const headline = document.getElementById('headline');
const headline2 = document.getElementById('headline2');
const subheadline = document.getElementById('subheadline');
const learnMoreImage = document.getElementById('learnMoreImage');
const logoImage = document.getElementById('logoImage');
const replayImage = document.getElementById('replayImage');

image.style.opacity = '0';
headline.style.opacity = '0';
headline.style.transform = 'translateX(-100%)';
headline2.style.opacity = '0';
headline2.style.transform = 'translateX(-100%)';
subheadline.style.opacity = '0';
subheadline.style.transform = 'translateX(100%)';
learnMoreImage.style.opacity = '0';
learnMoreImage.style.transform = 'translateY(-100px)';
logoImage.style.opacity = '0';
logoImage.style.transform = 'translateX(100%)';
replayImage.style.opacity = '0';
replayImage.style.transform = 'translateY(100px)';

setTimeout(() => {
  headline.style.transition = 'opacity 1s, transform 1s';
  headline.style.opacity = '1';
  headline.style.transform = 'translateX(0)';

  setTimeout(() => {
    image.style.transition = 'opacity 1s';
    image.style.opacity = '1';

    setTimeout(() => {
      image.style.opacity = '0';

      setTimeout(() => {
        headline.style.transition = 'opacity 1s, transform 1s';
        headline.style.opacity = '0';
        headline.style.transform = 'translateY(-100%) scale(0.5)';

        setTimeout(() => {
          headline2.style.transition = 'opacity 1s, transform 1s';
          headline2.style.opacity = '1';
          headline2.style.transform = 'translateX(0)';

          setTimeout(() => {
            subheadline.style.transition = 'opacity 1s, transform 1s';
            subheadline.style.opacity = '1';
            subheadline.style.transform = 'translateX(0)';

            setTimeout(() => {
              learnMoreImage.style.transition = 'opacity 1s, transform 1s';
              learnMoreImage.style.opacity = '1';
              learnMoreImage.style.transform = 'translateY(0)';

              setTimeout(() => {
                logoImage.style.transition = 'opacity 1s, transform 1s';
                logoImage.style.opacity = '1';
                logoImage.style.transform = 'translateX(0)';

                setTimeout(() => {
                  replayImage.style.transition = 'opacity 1s, transform 1s';
                  replayImage.style.opacity = '1';
                  replayImage.style.transform = 'translateY(0)';
                }, 1000); // Delay before replayImage appears
              }, 1000); // Delay before logoImage appears
            }, 1000); // Delay before learnMoreImage appears
          }, 1000); // Delay before subheadline appears
        }, 1000); // Delay before headline2 appears
      }, 1000); // Delay before headline vanishes
    }, 2000); // Delay before image fades out
  }, 100); // Delay before headline appears and moves
}, 100); // Initial delay






























