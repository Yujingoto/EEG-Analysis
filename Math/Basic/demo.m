%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Written by Yujin Goto. 
% Demo codes for Math.basic
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


%% 指数関数とその微分
syms x;

exp_func = exp(x);
sisuu1 = 1.5.^x;
sisuu2 = 2.^x;
sisuu3 = 4.^x;

figure;
subplot(1,4,1)
hold on
fplot(sisuu1, [-2 10], linewidth=2)
fplot(diff(exp_func), '--', [-2 10], linewidth=2)
ylim([0 60])
title('1.5^x', FontName='Arial', FontSize=15)
legend({'f(x)','f(x)\prime'},'Location','northwest', FontSize=10)
hold off

subplot(1,4,2)
hold on
fplot(sisuu2, [-2 10], linewidth=2)
fplot(diff(exp_func), '--', [-2 10], linewidth=2)
ylim([0 1200])
title('2^x', FontName='Arial', FontSize=15)
legend({'f(x)','f(x)\prime'},'Location','northwest', FontSize=10)
hold off

subplot(1,4,3)
hold on
fplot(exp_func, [-2 10], linewidth=2)
fplot(diff(exp_func), '--', [-2 10], linewidth=2)
ylim([0 2500])
title('e^x', FontName='Arial', FontSize=15)
legend({'f(x)','f(x)\prime'},'Location','northwest', FontSize=10)
hold off

subplot(1,4,4)
hold on
fplot(sisuu3, [-2 10], linewidth=2)
fplot(diff(exp_func), '--', [-2 10], linewidth=2)
ylim([0 2500])
title('4^x', FontName='Arial', FontSize=15)
legend({'f(x)','f(x)\prime'},'Location','northwest', FontSize=10)
hold off
