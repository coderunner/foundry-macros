const select = () => {
  const tree = game.tables.directory.folders;
  for (const folder of tree) {
    const options =
      folder.content?.map(
        (table) =>
          `<option value="${table.data._id}">${table.data.name}</option>`
      ) ?? null;
    if (options.length > 0) {
      if (select[folder.data.name]) {
        select[folder.data.name] += options;
      } else {
        const property = `<optgroup label="${folder.data.name}">${options}`;
        select[folder.data.name] = property;
      }
    }
  }
};

async function rollTable(html) {
  const table = game.tables.get(html.find(`select#selectedTable`).val());
  if (!table) return ui.notifications.error('No table selected.');
  const num = Math.floor(html.find(`input#numberOfDraws`).val());
  if (num < 1 || num > 5)
    return ui.notifications.error('Invalid number of rolls.');
  const whisper = html.find(`input#whisperToggle`).val();
  const { results } = await table.drawMany(num, {
    displayChat: false,
  });
  const description = table.data.description
    ? `<b>${table.data.description}</b>`
    : '';
  let message = '';
  results.forEach(async (r) => {
    if (r.data.type === 1) {
      if (r.data.img !== 'icons/svg/d20-black.svg')
        message += `<img src="${r.data.img}" width="30%" style="margin: 0 auto; display:block"/>`;
      message += `<p style="text-align:center;">@${r.data.collection}[${r.data.text}]</p>`;
    } else {
      message += `<p>${r.data.text}</p>`;
    }
    results.length > 1 ? (message += '<hr>') : null;
  });
  let flavor = `Rolls on the ${table.name} table:
	<hr>
	${description}`;
  if (results.length > 1) {
    message = message.substr(0, message.length - 4);
    flavor = `Rolls ${results.length} times on the ${table.name} table:
		<hr>
		${description}`;
  }
  ChatMessage.create({
    flavor: flavor,
    content: `
		<div class="forbidden-lands" style="margin:0 5px;">
		${message}
		</div>`,
    whisper: whisper ? [game.user] : null,
  });
}

function tableDialog() {
  select();
  const title = 'Roll Tables';
  const content = `
		<b>Select table:</b>
		<form style="display: flex; flex-direction: column; align-content: center; margin: 5px 0;">
		<div style="display: block; margin: 5px 0 2px;">
			<label>Table: </label>
			<select id="selectedTable" style="border-color: #aaa;"/>
				<option value="" disabled selected>--Please choose a table--</option>
				${Object.values(select)}
			</select>
		</div>
		<div style="display:block; margin: 2px 0 5px;">
			<label>Number of rolls: </label>
			<input type="number" id="numberOfDraws" name="numberOfDraws" value="1" min="1" max="5" style="width: 20px; height: 20px; text-align: center; font-size: 14px; font-weight: 600; margin-right: 10px; padding: 0; border-color: #aaa;" />

			<label>Private: </label>
			<input type="checkbox" id="whisperToggle" name="whisperToggle" style="position: relative; top: 5px; margin: 0;"/>
		</div>
		</form>
	`;
  const label = 'Roll';
  const callback = rollTable;
  return {
    title: title,
    content: content,
    label: label,
    callback: callback,
  };
}

Dialog.prompt(tableDialog());
