const PauseSimRate = 0.01;
const DefaultSimRate = 1;
const LowSimRate = 0.1;
/*
 * Functions
 */

function ActivePause()
{
	var simrate = Engine.GetSimRate();
	if (simrate > LowSimRate)
	{
		Engine.SetSimRate(PauseSimRate);
	}
	else
	{
		Engine.SetSimRate(DefaultSimRate);
	}
}

/*
 * Main()
 */
//print("Calling module activepause..."); // For debugging.
ActivePause();
