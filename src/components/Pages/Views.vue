<template>
	<v-container>
    <addition-dialog></addition-dialog>

		<v-layout row wrap>
			<v-flex xs12>
				<h5 class="primary--text">Сторонники
          <v-btn class="primary" @click.stop="openDialog('Мнение')">
            Добавить
          </v-btn></h5>
				<br>
				<p>
					Businnes Insider собрал в одном материале 11 представителей IT-индустри, которые верят в необходимость базового безусловного дохода — концепции, когда люди получают определенный объем денег просто потому что живут. Среди сторонников регулярных выплат — Ричард Брэнсон, Илон Маск, Эндрю Ын и другие.
				</p>
				<v-card>

				</v-card>
				
				<blockquote>
					<b>Ричард Брэнсон</b>
					<br>
					Генеральный директор Virgin Group Ричард Брэнсон в августе написал в своем блоге, что «большинство стран может сделать так, чтобы потребности каждого человека были удовлетворены». Он верит, что регулярные выплаты могут стать главным подходом в будущем и хочет, чтобы больше стран начали эксперименты.
				</blockquote>
				<br>
				<blockquote>
					<b>Стюарт Баттерфилд</b>
					<br>
					Сторонники базового дохода давно утверждают, что ситуация, когда человек обезопасен регулярным доходом, побудит людей рисковать и инвестировать. Баттерфилд, генеральный директор Slack, похоже, согласен с этой мыслью. В начале августа в своем аккаунте в Twitter он написал, что «даже очень небольшие регулярные выплаты откроют в огромном количестве людей дух предпринимательства».
				</blockquote>
				<br>
				<blockquote>
					<b>Пьер Омидьяр</b>
					<br>
					В феврале основатель eBay пожертвовал $493 000 через свою благотворительную организацию Omidyar Network на эксперимент по регулярным выплатам населению, который произойдет в Кении в конце этого года. Согласно февральскому заявлению, эксперимент будет «отличаться от прошлых исследований и предоставит аргументы, которые прольют свет на будущее борьбы с нищетой».
				</blockquote>
				<br>
				<blockquote>
					<b>Эндрю Ын</b>
					<br>
					После того, как Дональд Трамп выиграл выборы в США, Ын, сооснователь образовательной платформы Coursera и главный научный сотрудник Baidu, написал в Twitter, что «более чем когда-либо мы нуждаемся в базовом доходе, чтобы ограничить все недостатки, улучшить образование, и дать всем возможность для роста».

					Ын и раньше говорил о своей поддержке регулярных выплат населению. В январе он заявил, что базовый доход заслуживает того, чтобы его рассмотрели всерьез. Он также утверждал, что правительство должно помогать в оплате образования на протяжении всей жизни гражданина.
				</blockquote>
				<br>
				<blockquote>
					<b>Сэм Альтман</b>
					<br>
					Президент Y Combinator, крупнейшего инкубатора в Кремниевой долине, неоднократно выступал за введение базового дохода, утверждая, что экономика, управляемая роботами, почти наверняка станет реальностью в этом веке.

					Y Combinator запустил эксперимент по базовому доходу в Окленде, штат Калифорния, чтобы увидеть, как система работает на самом деле. Примерно 100 человек получают $2000 в месяц, несмотря ни на что.
				</blockquote>
				<br>
				<blockquote>
					<b>Илон Маск</b>
					<br>
					В интервью телеканалу CNBC, которое Маск дал в ноябре 2016 года, он заявил, что «есть большая вероятность, что мы придем к универсальному базовому доходу или чему-то в этом роде из-за автоматизации». Глава Tesla и SpaceX добавил, что не видит другого решения этой проблемы.
				</blockquote>
				<br>
				<blockquote>
					<b>Билл Гросс</b>
					<br>
					В своем инвестиционном прогнозе за май 2016 года Гросс, сооснователь консалтинговой компании Pacific Investment Management, предложил США потратить деньги на «революционную идею под названием „универсальный базовый доход“». «Если все больше и больше рабочих будут заменены роботами, им понадобятся деньги, чтобы жить, не так ли? Если вас смущает социализм, который предполагает эта идея, то я считаю, что мы к этому привыкнем», — заявил Гросс.
				</blockquote>
				<br>
				<blockquote>
					<b>Рэймонд Курцвейл</b>
					<br>
					Курцвейл, футурист и соучредитель Singularity University, также выражает интерес к базовому доходу, который должен покрыть основные потребности человека. Недавно он сказал, что люди, которые больше не должны работать ради зарплаты, могут исполнять свои мечты. «Вы будете делать то, что вам нравится. То, к чему у вас лежит сердце. Почему бы не назвать это работой?», — добавил Курцвейл.
				</blockquote>
				<br>
				<blockquote>
					<b>Альберт Венгер</b>
					<br>
					Основатель нескольких компаний и партнер венчурной компании Union Square Ventures, Венгер подробно рассказал о преимуществах базового дохода в своем блоге. Большинство людей, писал предприниматель, «смирились с тем, что их мечты не будут реализованы». Он винит в этом экономическое неравенство и считает, что благодаря базовому доходу ситуация изменится.
				</blockquote>
				<br>
				<blockquote>
					<b>Тим О’Райли</b>
					<br>
					О’Райли, генеральный директор O’Reilly Media, не считает, что автоматизация угрожает занятости в США. Но он признает, что базовый доход — это хорошая идея, хоть сейчас это «только начало дискуссии». Для О’Райли важно то, что работа дает людям как смысл, так и самоопределение. Именно при таком подходе базовый доход будет успешным, уверен предприниматель. Безусловные выплаты изменят само понятие работы и дадут людям большую гибкость, чтобы делать то, что они любят.
				</blockquote>
				<br>
				<blockquote>
					<b>Крис Хьюз</b>
					<br>
					Сооснователь Facebook Крис Хьюз является активным сторонником базового дохода, считая, что эта идея может восстановить веру американцев в экономику, которую многие признают сломаной. «Вместо того, чтобы пытаться переделать нашу экономику, как это было в 1950-х , я думаю, что мы должны быть честными с самими собой», — утверждает Хьюз.
				</blockquote>

				<!--
				<p>
					<a target="_blank" href="https://hightech.fm/2017/11/08/andrew-ng">
						Эндрю Ын предлагает ввести БОД для "пострадавших от ИИ"
					</a>
				</p>
				-->
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  import openDialog from '@/utils/open-dialog'

	export default {
    methods: {
      openDialog
    }
	}
</script>
