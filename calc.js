// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   calc.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: vifernan <vifernan@42.fr>                  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/10/30 17:18:00 by vifernan          #+#    #+#             //
//   Updated: 2021/10/31 00:25:50 by vifernan         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var global = 0;
var global2 = 0;
var flag = 0;
var flag2 = 0;
var result = 0;
var m = 0;
var d = 0;
var l = 0;
var p = 0;
var eq = 0;
var po = 0;
var per = 0;

function principal(value){
	if (m > 0 || d > 0 || l > 0 || p > 0 || per > 0)
	{
		if (flag2 != 0 && po == 0)
			global2 *= 10;
		if (flag2 != 0 && po > 0)
		{
			for (let i = 0; i < po; i++) {
				value /= 10;
				console.log("VALUE" + value);
			}
			po++;
		}
		flag2++;
		global2 += value;
		if (po > 0)
			document.getElementById("principal").value = Number(global2).toFixed(po - 1);
		else
			document.getElementById("principal").value = global2;
	}
	else
	{
		if (flag != 0 && po == 0)
			global *= 10;
		if (flag != 0 && po > 0)
		{
			for (let i = 0; i < po; i++) {
				value /= 10;
				console.log("VALUE" + value);
			}
			po++;
		}
		global += value;
		flag++;
		if (po > 0)
			document.getElementById("principal").value = Number(global).toFixed(po - 1);
		else
			document.getElementById("principal").value = global;
	}
	console.log("PO:" + po);
	console.log("GLOBAL:" + global);
}

function masme(value){
	if (m > 0 || d > 0 || l > 0 || p > 0 || per > 0)
	{
		global2 *= -1;
		document.getElementById("principal").value = global2;
	}
	else
	{
		global *= -1;
		document.getElementById("principal").value = global;
	}
}

function perc(value){
	p = 0;
	m = 0;
	d = 0;
	po = 0;
	l = 0;
	per++;
}

function menus(value){
	p = 0;
	m = 0;
	d = 0;
	po = 0;
	per = 0;
	l++;
	if (l == 2)
	{
		document.getElementById("principal").value = global2 - global;
		l = 1;
		global -= global2;
		global2 = 0;
	}
}

function plus(value){
	l = 0;
	m = 0;
	d = 0;
	po = 0;
	per = 0;
	p++;
	if (p == 2)
	{
		document.getElementById("principal").value = global2 + global;
		p = 1;
		global += global2;
		global2 = 0;
	}
}

function divi(value){
	p = 0;
	l = 0;
	m = 0;
	po = 0;
	per = 0;
	d++;
	if (d == 2)
	{
		document.getElementById("principal").value = global2 / global;
		d = 1;
		global /= global2;
		global2 = 0;
	}
}

function multi(value){
	d = 0;
	l = 0;
	p = 0;
	po = 0;
	per = 0;
	m++;
	if (m == 2)
	{
		document.getElementById("principal").value = global2 * global;
		m = 1;
		global *= global2;
		global2 = 0;
	}
}

function point(value)
{
	po = 1;
	document.getElementById("principal").value = global + ".";
}

function del(){
	d = 0;
	l = 0;
	m = 0;
	p = 0;
	po = 0;
	per = 0;
	global = 0;
	global2 = 0; 
	po = 0;
	document.getElementById("principal").value = global;
}

function equal(){
	if (m > 0)
	{
		result = global * global2;
		m = 0;
	}
	if (d > 0)
	{
		result = global / global2;
		d = 0;
	}
	if (p > 0)
	{
		result = global + global2;
		p = 0;
	}
	if (l > 0)
	{
		result = global - global2;
		l = 0;
	}
	if (per > 0)
	{
		console.log("2---" + global2);
		console.log("1---" + global);
		result = ((global2 * global) / 100).toFixed(2);
		per = 0;
	}
	global = result;
	global2 = 0;
	po = 0;
	document.getElementById("principal").value = result;
}
