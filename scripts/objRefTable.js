const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.TileMovement,
		C3.Behaviors.solid,
		C3.Behaviors.Rotate,
		C3.Plugins.Text,
		C3.Behaviors.Bullet,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsClockwiseFrom,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{поле: 0},
	{Платформер: 0},
	{ДвижениеПоКлеткам: 0},
	{рыцарь: 0},
	{Твёрдый: 0},
	{Спрайт2: 0},
	{Поворот: 0},
	{Спрайт3: 0},
	{богач: 0},
	{Текст: 0},
	{телефон: 0},
	{каридор: 0},
	{Спрайт: 0},
	{Спрайт4: 0},
	{Спрайт5: 0},
	{Спрайт6: 0},
	{Текст2: 0},
	{Спрайт7: 0},
	{Спрайт8: 0},
	{Пуля: 0},
	{Спрайт9: 0},
	{Спрайт10: 0},
	{Спрайт11: 0}
];

self.InstanceType = {
	поле: class extends self.ISpriteInstance {},
	рыцарь: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	богач: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	телефон: class extends self.ISpriteInstance {},
	каридор: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	Текст2: class extends self.ITextInstance {},
	Спрайт7: class extends self.ISpriteInstance {},
	Спрайт8: class extends self.ISpriteInstance {},
	Спрайт9: class extends self.ISpriteInstance {},
	Спрайт10: class extends self.ISpriteInstance {},
	Спрайт11: class extends self.ISpriteInstance {}
}